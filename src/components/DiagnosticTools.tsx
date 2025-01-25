import img from "../assets/Diagnostic.png"

const DiagnosticTools = () => {
  return (
    <>
      <section className="bg-[#1a1f2b] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[24px] text-gray-400">Car Diagnostic</span>
            <h2 className="text-3xl font-bold mt-2">Tools and Scanners</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt="Car Diagnostic Tool"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>

            </div>

            <div className='sm:px-8 px-0'>
              <div className="py-2 flex items-center space-x-2 sm:px-8 px-0">
                <span className="text-[28px] text-gray-500 font-semibold">£</span>
                <span className='sm:text-[27px] text-lg '>Save money and diagnose faults</span>
              </div>
              <div className="space-y-8">
                <p className="text-gray-400 text-[16px]">
                  A car diagnostic scan from your local dealership could cost up to £100 + VAT. Why not buy a scanner and do it yourself? They are easy to use, the scanner will pay for itself. You can then prevent the markup on your next mechanic who won't have to do a diagnostics scan, thus saving time and money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default DiagnosticTools;