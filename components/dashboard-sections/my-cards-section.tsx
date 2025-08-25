import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    isBlue: true,
    bgClass:
      "bg-[linear-gradient(136deg,rgba(76,73,237,1)_0%,rgba(10,6,244,1)_100%)]",
    textColor: "text-white",
    labelColor: "text-[#ffffffb2]",
    cardNumberColor: "text-white",
    chipSrc: "/images/chip-card-blue.png",
    bottomBg:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]",
    circleColor: "bg-[#ffffff80]",
  },
  {
    id: 2,
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    isBlue: false,
    bgClass: "bg-white border border-solid border-[#deeaf2]",
    textColor: "text-[#343C6A]",
    labelColor: "text-[#718ebf]",
    cardNumberColor: "text-[#343C6A]",
    chipSrc: "/images/chip-card-white.png",
    bottomBg: "border-t border-solid border-[#dfeaf2]",
    circleColor: "bg-[#9198af80]",
  },
];

export const MyCardsSection = () => {
  return (
    <section className="w-full h-full relative min-h-[350px]">
      <div className="flex justify-between items-center mb-6 md:mb-[47px]">
        <h2 className="font-semibold text-[#343C6A] text-lg md:text-[22px] tracking-[0] leading-[normal]">
          My Cards
        </h2>
        <Button
          variant="ghost"
          className="h-auto p-1 font-semibold text-[#343C6A] text-sm md:text-[17px] text-right tracking-[0] leading-[normal] hover:bg-transparent"
        >
          See All
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-[30px] w-full justify-start items-start overflow-x-auto h-full">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className={`w-full sm:w-[350px] h-[200px] sm:h-[235px] sm:min-w-[300px] sm:max-w-[350px] relative rounded-2xl ${card.bgClass} overflow-hidden flex flex-col justify-between shrink-0 py-0 bt-0 pb-6`}
          >
            {/* Top section: Balance */}
            <div className="flex justify-between items-start px-3 md:px-4 pt-3 md:pt-4">
              <div>
                <div className={`text-xs ${card.labelColor}`}>Balance</div>
                <div
                  className={`text-lg md:text-xl font-normal ${card.textColor}`}
                >
                  {card.balance}
                </div>
              </div>

              {/* Chip */}
              <div
                className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center`}
              >
                <Image
                  src={card.chipSrc}
                  width={36}
                  height={36}
                  alt="Card Chip"
                  className="w-8 h-8 md:w-9 md:h-9"
                />
              </div>
            </div>

            {/* Middle section: Card holder and valid thru */}
            <div className="flex justify-between mt-2 md:mt-4 px-3 md:px-4">
              <div>
                <div className={`text-xs ${card.labelColor}`}>CARD HOLDER</div>
                <div className={`text-sm ${card.textColor}`}>
                  {card.cardHolder}
                </div>
              </div>

              <div>
                <div className={`text-xs ${card.labelColor}`}>VALID THRU</div>
                <div className={`text-sm ${card.textColor}`}>
                  {card.validThru}
                </div>
              </div>
            </div>

            {/* Bottom section: Card number and circles */}
            <div
              className={`w-full h-[50px] md:h-[70px] ${
                card.isBlue
                  ? card.bottomBg
                  : `rounded-[0px_0px_25px_25px] ${card.bottomBg}`
              }`}
            >
              <div
                className={`relative w-full px-3 md:px-6 h-[30px] ${
                  card.isBlue ? "top-3 md:top-5" : "top-3 md:top-[19px]"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-3 md:left-6 font-normal ${card.cardNumberColor} text-lg md:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap`}
                >
                  {card.cardNumber}
                </div>
                <div className="absolute w-11 h-[30px] top-0 right-3 md:right-6">
                  <div className="relative h-[30px]">
                    <div
                      className={`absolute w-[30px] h-[30px] top-0 left-0 ${card.circleColor} rounded-[15px]`}
                    />
                    <div
                      className={`absolute w-[30px] h-[30px] top-0 left-3.5 ${card.circleColor} rounded-[15px]`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
