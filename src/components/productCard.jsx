export default function ProductCard(props){

    return (
        <div className="w-64 bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

    <div className="bg-slate-800 h-64 flex items-center justify-center overflow-hidden">
        <img
            src={props.image}
            alt={`Picture of ${props.name}`}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
    </div>

    <div className="p-5">
        <h2 className="text-xl font-bold text-white">
            {props.name}
        </h2>

        <p className="text-2xl font-bold text-indigo-400 mt-3">
            LKR {props.price.toLocaleString()}
        </p>

        <button className="w-full mt-5 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold transition-all duration-300">
            🛒 Buy Now
        </button>
    </div>

</div>
    )
} 