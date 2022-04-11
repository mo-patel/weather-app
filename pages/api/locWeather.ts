import type { NextApiRequest, NextApiResponse } from 'next'
import { LocationResult, RequestError } from '../../types/Weather'
const LONDON_WOEID = 44418;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LocationResult | RequestError>
) {
    try{
        const result = await fetch('https://www.metaweather.com/api/' + 'location/' + LONDON_WOEID + '/');
        if(result.ok){
            res.status(result.status).json(await result.json());
        }
        throw new Error(result.statusText);
    }catch(e: any){
        return res.status(500).json({"code": 500, "message": e.message ?? "An error occurred trying to fetch the data"})
    }
}