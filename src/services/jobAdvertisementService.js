import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/job-advertisements/getall")
    }
    getActiveJobAdvertisements(){
        return axios.get("http://localhost:8080/api/job-advertisements/getByIsActive")
    }
    getActiveAndOrderApplicationDeadlineJobAdvertisements(){
        return axios.get("http://localhost:8080/api/job-advertisements/getByApplicationDeadline")
    }
}