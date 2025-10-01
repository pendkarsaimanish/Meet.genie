from faster_whisper import WhisperModel
from google.genai import types
from google import genai
from dotenv import load_dotenv
import json
import os
from pydantic import BaseModel

class SummaryResponse(BaseModel):
    summary: str
    action_items: list[str]


load_dotenv()
model_size="tiny"
audio_file_path = r"D:\react\ai_meeting_summarizer\backend\council_meeting.mp3"

client = genai.Client(api_key=os.getenv('GEMINI_API_KEY'))
model = WhisperModel(model_size, device="cuda")

segments, _ = model.transcribe(audio_file_path)
full_transcript= " ".join(s.text for s in segments).strip()


prompt = f"""
Summarize the following meeting transcript:
Transcript: {full_transcript}
    
Return JSON with:
- "summary": main points
- "action_items": list of tasks with deadlines (if mentioned)
"""


response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt,
    config={
        "response_mime_type": "application/json",
        "response_schema": list[SummaryResponse]
    }
)

print(response.text)


# try:
#     for segment in segments:
#         print(segment.text)

#         res = client.models.generate_content(
#             contents=f'''Summarize the following meeting transcript:
#             Transcript: {segment.text}.
            
#             Return JSON with:
#             - "summary": main points
#             - "action_items": list of tasks with deadlines (if mentioned)
#             ''',
#             model="gemini-2.5-flash", 
#             config=types.GenerationConfig(
#                 response_mime_type="application/json"
#             ) 
#         )

#         print(f'''
#                 Response Generated:
#                 {json.loads(res.text)}
#                ''')

# except Exception as e:
#     print(f'{e}')

# finally:
#     print("Completed.")