import React from 'react'

const SingleProductcards = () => {
    return (
        <div>
            <span>Up to 75% off | Laptops, headphones & more</span>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/AugArt/Electronics/GW/D52498136_IN_CEPC_Electronics_GW_Graphics_PC_CC0.5x._SY304_CB630947424_.jpg" alt="" />
        </div>
    )
}

const FourProductcards = () => {
    return (
        <div>
            <span>Exclusive offers on travel tickets</span>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/AUGART/PCQC/Flight_PC_QC_186x116._SY116_CB630802260_.jpg" alt="" />
                <span>Flight Tickets</span>
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/AUGART/PCQC/Bus_PC_QC_186x116._SY116_CB630802260_.jpg" alt="" />
                <span>Bus Ticket</span>
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/AUGART/PCQC/Train_PC_QC_186x116._SY116_CB630802260_.jpg" alt="" />
                <span>Train Ticket</span>
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/AUGART/PCQC/Travel-products_PC_QC_186x116._SY116_CB630802309_.jpg" alt="" />
                <span>Essential Travel products</span>
            </div>
        </div>
    )
}

export { SingleProductcards, FourProductcards }
