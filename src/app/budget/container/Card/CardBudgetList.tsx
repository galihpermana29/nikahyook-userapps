function CardBudgetList() {
  return (
    <div className="border rounded-lg py-2 px-3 flex justify-between items-center gap-3">
      <div>
        <h3 className="text-caption-1 font-medium mb-1">
          The Apurva Kempinski Bali
        </h3>
        <p className="text-caption-2 text-ny-gray-400">Rp2.200.000</p>
      </div>
      <div className="text-end">
        <h4 className="text-caption-2 text-ny-info-500 font-medium mb-1">
          Paid
        </h4>
        <p className="text-caption-3 text-ny-gray-400">Venue</p>
      </div>
    </div>
  );
}

export default CardBudgetList;
