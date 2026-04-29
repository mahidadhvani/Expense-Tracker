export default function Settings() {
  const clearData = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Settings</h2>

      <button
        onClick={clearData}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Clear Data
      </button>
    </div>
  );
}