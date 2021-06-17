import React from "react";

function VaccineScreen() {
  return (
    <div>
      <div className="vaccine-quesitons">
        <h1>Which COVID19 vaccines are licensed in India ?</h1>
        <p>
          Two vaccines were granted emergency use authorization by the Central
          Drugs Standard Control Organization (CDSCO) in India, Covishield®
          (AstraZeneca's vaccine manufactured by Serum Institute of India) and
          Covaxin® (manufactured by Bharat Biotech Limited). Sputnik - V has
          been granted EUA in the month of April 2021.
        </p>
        <h1>Where can I get the vaccine from?</h1>
        <p>
          Vaccines are available from Government and Private Health Facilities
          as notified, known as COVID Vaccination Centres (CVCs).
        </p>
        <h1>
          If I cannot pre-register myself online, how do I register on the spot
          and get vaccinated?
        </h1>
        <p>
          Those who cannot get themselves registered online can contact their
          local Government health workers, who will help the beneficiaries to
          the Government CVC for on the spot registration, appointment,
          verification and vaccination on the same day. Please ask your nearest
          Government health care worker to guide you about the nearest
          Government CVC where COVID vaccination will be available and the days
          of the week when this will be available. You need to carry your mobile
          phone and a photo identification document to get yourself vaccinated.
          The workers in the Government CVC will help you to register on the
          spot, get appointment and get vaccinated on the same day. This option
          is available for people above the age of 45 only.
        </p>
        <h1>
          What documents are required for registration of eligible beneficiary?
        </h1>
        <p>
          Any of the below mentioned ID with Photo may be produced at the time
          of registration:
          <li>Adhar Card</li>
          <li>Passport</li>
          <li>Pan Card</li>
          <li>Voter ID Card</li>
        </p>
        <h1>
          Why vaccination is not provided to children who are usual target?
        </h1>
        <p>
          COVID-19 affects all age groups; however, morbidity & mortality is
          several times higher in adults particularly in those above the age of
          50 years. Children have either asymptomatic or mild infection. The
          general practice is to first evaluate any new vaccine in older
          population and then age reduction is done to assess the safety and
          effectiveness in paediatric population. The currently available
          vaccines have not been evaluated in children so far. There are some
          clinical trials now underway to test the effectiveness and safety of
          the COVID-19 vaccines in children.
        </p>
      </div>
      <div className="side-effects">
        <div>
          <h1>Common Side Effects(AEFI)</h1>
        </div>
        <div>
          <img src="images/heda.jpg" alt="sideefffects" />
        </div>
      </div>
    </div>
  );
}

export default VaccineScreen;
