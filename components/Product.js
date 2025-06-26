export default function Product({ title, price, description }) {
  const paragraphs = description.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="bg-white p-6 shadow-md rounded-xl">
      <h3 className="text-xl font-semibold text-[#008584]">{title}</h3>
      <p className="text-sm text-gray-600">{price}</p>
      <div className="mt-3 text-sm text-gray-700 space-y-2">
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
}
