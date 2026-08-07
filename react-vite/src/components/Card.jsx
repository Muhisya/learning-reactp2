const Cardin = [
    {
        id: 1,
        laptop: "Lenovo LOQ",
        price: "Harga terkini Lenovo LOQ 15IRX9 di pasaran Indonesia berkisar antara Rp 13.000.000 hingga Rp 24.999.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc10PwteuRNGRNy-nwzA3_taZsX1l--ZXVsffdEtK-3w&s=10"
    },
    {
        id: 2,
        laptop: "Lenovo LOQ",
        price: "Harga terkini Lenovo LOQ 15IRX9 di pasaran Indonesia berkisar antara Rp 13.000.000 hingga Rp 24.999.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc10PwteuRNGRNy-nwzA3_taZsX1l--ZXVsffdEtK-3w&s=10"
    },
    {
        id: 3,
        laptop: "Lenovo LOQ",
        price: "Harga terkini Lenovo LOQ 15IRX9 di pasaran Indonesia berkisar antara Rp 13.000.000 hingga Rp 24.999.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc10PwteuRNGRNy-nwzA3_taZsX1l--ZXVsffdEtK-3w&s=10"
    }
];

function Card() {
    return (
        <div className="grid grid-cols-3 gap-6 p-8">
            {Cardin.map((item) => (
                <div key={item.id} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden h-min self-center">
                    <div className="p-6 flex flex-col justify-center items-center h-full">
                        <h3 className="text-lg font-bold mb-2">{item.laptop}</h3>
                        <img className="rounded-2xl p-2 border-2 border-gray-100 my-2 w-80" src={item.image} alt={item.laptop} />
                        <p className="text-gray-600 text-center">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;