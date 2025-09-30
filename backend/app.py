from faster_whisper import WhisperModel

model_size="tiny"

model = WhisperModel(model_size, device="cpu")

segments, _ = model.transcribe(r"D:\react\ai_meeting_summarizer\backend\council_meeting.mp3")
segments = list(segments)

print(segments)