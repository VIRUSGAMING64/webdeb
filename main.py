import fastapi
from pydantic import BaseModel
app = fastapi.FastAPI()
@app.get("/")
async def root():
    return {"hola":"mundo"}

