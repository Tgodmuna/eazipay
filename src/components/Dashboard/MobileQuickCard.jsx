import React from "react";
import {
  FaMoneyBill,
  FaUserPlus,
  FaFileInvoiceDollar,
  FaPaperPlane,
  FaEdit,
  FaHandHoldingUsd,
  FaMobileAlt,
  FaDatabase,
  FaBolt,
} from "react-icons/fa";

const Card = ({ Icon, title }) => {
  return (
    <div className='bg-white rounded-lg p-4 text-center hover:border-emerald-200 shadow w-[5rem] m-auto flex flex-col justify-center items-center'>
      <a href="''" className='text-3xl text-green-400'>
        <Icon />
      </a>
      <h2 className='text-sm text- font-semibold mt-2'>{title}</h2>
    </div>
  );
};

const MobileQuickCard = () => {
  const cardsData = [
    { Icon: FaMoneyBill, title: "Pay Salaries" },
    { Icon: FaUserPlus, title: "Add Employee" },
    { Icon: FaFileInvoiceDollar, title: "Payslip" },
    { Icon: FaPaperPlane, title: "Send Payslips" },
    { Icon: FaEdit, title: "Edit Salaries" },
    { Icon: FaHandHoldingUsd, title: "Get Loan" },
    { Icon: FaMobileAlt, title: "Airtime" },
    { Icon: FaDatabase, title: "Data" },
    { Icon: FaBolt, title: "Electricity" },
  ];

  return (
      <div className='container mx-auto mt-8 bg-slate-200 w-full md:hidden py-5 '>
          <h1 className="capitalize text-xl text-slate-400 text-left m-5">quick actions</h1>
      <div className='grid grid-cols-3 gap-1'>
        {cardsData.map((card, index) => (
          <Card key={index} Icon={card.Icon} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default MobileQuickCard;
