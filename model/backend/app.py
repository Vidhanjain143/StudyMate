from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import uvicorn 
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

label_encoder = None
svc = None 

with open('label_encoder.obj', 'rb') as file:
    label_encoder = pickle.load(file)


with open('svc.obj', 'rb') as file:
    svc = pickle.load(file)

class User(BaseModel):
    STG: float
    SCG: float
    STR: float 
    LPR: float
    PEG: float

@app.post("/calculate")
async def create_item(user: User):
    
    try:
        STG = user.STG 
        SCG = user.SCG
        STR = user.STR
        LPR = user.LPR
        PEG = user.PEG 
        array = [STG, SCG, STR, LPR, PEG]
        res =  svc.predict([array])
        res = label_encoder.inverse_transform(res)
        print(res)
        return res[0], 200
    except Exception as e:
        return "Error", 500

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)