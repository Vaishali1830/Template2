import image from '../../assets/footer.jpeg'

export const Footer1 = () => {
 return(
    <div className="relative h-[80vh]">
      <p className="p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white-text text-lg font-bold bg-black/50 rounded-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat nulla aspernatur, dolores nihil distinctio! Hic consectetur aspernatur incidunt doloremque dolorum exercitationem quos esse! Reprehenderit ipsa sint distinctio esse impedit!
      </p>
      <img
        src={image}
        alt="image"
        className="w-full h-full object-cover rounded-lg shadow-md " 
      />
      <button className='p-4 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white-text btn-primary'>Learn More</button>
    </div>
 )
}