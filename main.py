import fastapi
from pydantic import BaseModel
app = fastapi.FastAPI()

class nodo(BaseModel):
    padre:int = 0
    hijos:list = []

@app.get("/")
async def root():
    return {"hola":"mundo"}

