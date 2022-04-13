import type { NextApiRequest, NextApiResponse } from 'next'
import { LocationResult, RequestError } from '../../types/Weather'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LocationResult | RequestError>
) {
    try{
        const { woe } = req.query;
        const result = await fetch(process.env.NEXT_PUBLIC_WEATHERDATA_APIURL + 'location/' + woe);
        if(result.ok){
            return res.status(result.status).json(await result.json());
        }
        throw new Error(result.statusText);
    }catch(e: any){
        return res.status(500).json({"code": 500, "message": e.message ?? "An error occurred trying to fetch the data"})
    }
}
