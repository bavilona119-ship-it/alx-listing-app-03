const CancellationPolicy = () => (
  <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Cancellation Policy</h2>
    <p className="mt-2 text-gray-600">
      Free cancellation before <strong>Aug 23</strong>. Cancel before check-in on <strong>Aug 24</strong> for a partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
      <li>Follow the house rules.</li>
      <li>Treat your host’s home like your own.</li>
      <li>No smoking or parties unless stated otherwise.</li>
    </ul>
  </div>
);

export default CancellationPolicy;
