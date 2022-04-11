import type { NextApiRequest, NextApiResponse } from 'next'
import { LocationDetail, RequestError } from '../../types/Weather'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LocationDetail[] | RequestError>
) {
  try{
    const { searchTerm } = req.query;
    const locationReq = await fetch('https://www.metaweather.com/api/' + 'search/?query=' + searchTerm);
    if(locationReq.ok){
        return res.status(locationReq.status).json(await locationReq.json())
    }
    throw new Error(locationReq.statusText);
  }catch(e: any){
    return res.status(500).json({"code": 500, "message": e.message ?? "An error occurred trying to fetch the data"})
  }
}
