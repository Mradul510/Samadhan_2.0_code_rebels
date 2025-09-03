export default function StudentCard({ student, onDelete }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{student.name}</h2>
        <p className="text-gray-600">Age: {student.age}</p>
      </div>
      <button
        onClick={() => onDelete(student.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}
