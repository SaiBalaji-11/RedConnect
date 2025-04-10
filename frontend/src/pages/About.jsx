import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
  <h1 className="text-4xl font-bold text-red-600 mb-4">Blood Donation: A Lifesaving Act</h1>

  {/* Section 1 */}
  <div className="max-w-6xl mb-12">
    <h2 className="text-2xl font-semibold text-red-600 mb-4">Why Donate Blood?</h2>
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src="https://parashospitals-web.s3.ap-south-1.amazonaws.com/uploads/2017/06/all-about-blood-donation.jpg"
        alt="Blood Donation"
        className="w-full md:w-1/2 h-48 object-cover rounded-xl"
      />
      <p className="text-gray-600 text-lg">
        Blood donation is a simple, yet incredibly impactful way to save lives. Every time someone donates, they
        are helping people in emergencies, such as trauma victims, cancer patients, or individuals undergoing major
        surgeries. A single donation can save up to three lives, making it one of the most selfless acts you can
        perform. It is essential in maintaining a stable supply in hospitals for surgeries, childbirths, and critical
        care. Blood is needed at all times, which makes regular donations a vital part of healthcare systems worldwide.
      </p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="max-w-6xl mb-12">
    <h2 className="text-2xl font-semibold text-red-600 mb-4">Who Can Donate Blood?</h2>
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src="https://www.kokilabenhospital.com/blog/wp-content/uploads/2024/06/The-Lifesaving-Gift.-How-Blood-Donation-Makes-a-Difference_Blog-image.jpg"
        alt="Blood Donor"
        className="w-full md:w-1/2 h-48 object-cover rounded-xl"
      />
      <p className="text-gray-600 text-lg">
        Almost anyone in good health can donate blood, though there are certain criteria that must be met. Healthy
        individuals between the ages of 18 and 65, who weigh at least 110 pounds (50 kg) and are free of certain
        medical conditions, are eligible. Donors should be free from any infections or diseases that could be transmitted
        through blood, such as HIV or Hepatitis. A quick health check-up is typically performed before donation to ensure
        safety. The process is simple, and the whole donation only takes about 10-15 minutes, with recovery usually
        taking less than an hour.
      </p>
    </div>
  </div>

  {/* Section 3 */}
  <div className="max-w-6xl mb-12">
    <h2 className="text-2xl font-semibold text-red-600 mb-4">The Benefits of Blood Donation</h2>
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpqnT1IT_IQ3Mc_053QwIJLA3NPUOGBr57g&s"
        alt="Blood Donation Benefits"
        className="w-full md:w-1/2 h-48 object-cover rounded-xl"
      />
      <p className="text-gray-600 text-lg">
        Blood donation is not only beneficial for the recipients but also for the donors. Donating blood can help reduce
        iron levels in the body, which lowers the risk of heart disease. It also stimulates the production of new blood
        cells, enhancing overall health. Furthermore, regular donors can benefit from the satisfaction of knowing they
        are saving lives and contributing to their community. There is a sense of fulfillment in giving, and blood
        donation can serve as a reminder of the vital role each individual plays in improving the health of others.
      </p>
    </div>
  </div>

  {/* Section 4 */}
  <div className="max-w-6xl mb-12">
    <h2 className="text-2xl font-semibold text-red-600 mb-4">How to Donate Blood?</h2>
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src="https://etimg.etb2bimg.com/photo/101351521.cms"
        alt="Blood Donation Process"
        className="w-full md:w-1/2 h-48 object-cover rounded-xl"
      />
      <p className="text-gray-600 text-lg">
        The process of donating blood is simple and straightforward. First, you will be asked to complete a questionnaire
        to confirm your eligibility. Then, a healthcare professional will check your vital signs to ensure you're healthy
        enough to donate. Once approved, a sterile needle will be inserted into one of your veins, and approximately 1 pint
        (about 450 ml) of blood will be drawn. The procedure typically lasts 10-15 minutes, and you will be asked to
        rest afterward while enjoying some refreshments to help restore your energy. Donors are encouraged to hydrate well
        before and after the donation.
      </p>
    </div>
  </div>

  {/* Section 5 */}
  <div className="max-w-6xl mb-12">
    <h2 className="text-2xl font-semibold text-red-600 mb-4">The Need for Regular Blood Donations</h2>
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src="https://www.parulsevashramhospital.com/wp-content/uploads/2024/07/blood-donation-health-benefits.jpg"
        alt="Regular Blood Donation"
        className="w-full md:w-1/2 h-48 object-cover rounded-xl"
      />
      <p className="text-gray-600 text-lg">
        The need for blood donations is constant, and hospitals rely on regular donors to maintain a steady supply of
        blood. Blood cannot be manufactured, and it has a limited shelf life. Whole blood lasts only about 42 days, while
        platelets have a shelf life of just 5 days. This makes it crucial for individuals to donate regularly. In addition,
        the demand for blood increases during emergencies, natural disasters, and during certain medical treatments. Regular
        donation ensures that there is always an adequate supply to meet the needs of those requiring blood transfusions.
      </p>
    </div>
  </div>
</div>

    );
}

export default About;
