from faster_whisper import WhisperModel
from google import genai

client = genai.Client(api_key="")

model_size="tiny"

model = WhisperModel(model_size, device="cuda")

segments, _ = model.transcribe(r"D:\react\ai_meeting_summarizer\backend\council_meeting.mp3")
segments = list(segments)

res = client.models.generate_content()

for segment in segments:
    print(segment.text)

