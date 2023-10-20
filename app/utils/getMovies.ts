import axios from 'axios'

export default async function getMovies(formData: FormData) {
    //console.log("formData:")
    //console.log(formData.get('search'))
    //extract the input from the formdata with formData.get()
    try {
        const url = process.env.URL + "titles/" + formData.get('search')
        //console.log("url:")
        //console.log(url)
        await axios.get(url)
            .then(res => {
                //console.log("res:")
                //console.log(res);
                //console.log(res.data);
                // setMovie(movie => movie = res.data);
                return res.data
                //console.log("movie after set:")
                //console.log(movie);
            })
    } catch (error) {
        //console.log("error occured")
        //console.log(error)
        return error
    }
}