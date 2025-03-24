import { YoutubePlayer } from "./YoutubePlayer"

export const Section3 = () => {
    return(
        <div className="bg-surface mt-10 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-serif text-primary text-center font-bold pt-8">Empowering Minds, Shaping Futures</h1>
            <YoutubePlayer videoId="-X7okpS9Ufc"/>
            <p className="text-primary text-xl pt-8 w-[70vw] text-center font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quas optio, similique rerum mollitia corporis possimus accusantium magni dolorem inventore!</p>

            <button className="btn-primary mt-6">Join Us</button>
        </div>
    )
}