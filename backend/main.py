
import os
import yt_dlp
from dotenv import load_dotenv
from groq import Groq
from pydantic import BaseModel

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI


app = FastAPI()
@app.get("/version")
def version():
    return {"version": "TEST_123"}

@app.get("/test-ytdlp")
def test_ytdlp():
    try:
        with yt_dlp.YoutubeDL({"quiet": True}) as ydl:
            info = ydl.extract_info(
                "https://www.youtube.com/watch?v=kA_g0z_L9wY",
                download=False
            )

        return {
            "success": True,
            "title": info.get("title"),
            "duration": info.get("duration")
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://clipper-ai-production-cf41.up.railway.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
from youtube_transcript_api import YouTubeTranscriptApi
class AnalyzeRequest(BaseModel):
    transcript: str
    prompt: str

app = FastAPI()
load_dotenv()

groq_client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[ "http://localhost:5173",
    "https://clipper-ai-ten.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/transcript/{video_id}")
def get_transcript(video_id: str):
    try:
        transcript = YouTubeTranscriptApi().fetch(video_id)

        text = " ".join(
            item.text for item in transcript
        )

        return {
            "success": True,
            "video_id": video_id,
            "transcript": text
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

@app.post("/analyze")
def analyze_video(data: AnalyzeRequest):

    response = groq_client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content":
                    data.prompt +
                    "\n\nVIDEO TRANSCRIPT:\n" +
                    data.transcript[:8000]
            }
        ],
        temperature=0.7,
    )

    return {
        "content":
            response.choices[0].message.content
    }