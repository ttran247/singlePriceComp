import React from 'react'

function PriceCard (){ 

        return (
            <div className="cardContainer">
                <section className="top">
                <h3 id="join">Join our community</h3>
                <h4 className="trial">30-day, hassle-free money back guarantee</h4>
                    <p className="info">Gain access to our full library of tutorials along with expert code reviews. 
 Perfect for any developers who are serious about honing their skills.</p>
                </section>
                <section className="left">
                <h3>Monthly Subscription</h3>
                    <b>$29</b> per month <br></br>
                    <p>Full access for less than $1 a day </p>
                    <button>Sign Up</button>
                    </section>
                    <section className="right">

                    <h3>Why Us</h3>
                    <p>Tutorials by industry experts Peer & expert code review Coding exercies
                     
                        Access to our GitHub repos Community forum Flashcard decks New Videos every week
                    </p>
                    </section>
            </div>

    )
        }


export default PriceCard;