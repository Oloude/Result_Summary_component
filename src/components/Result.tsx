 

function Result() {
  return (
    <section className="rounded-b-3xl lg:rounded-3xl bg-gradient-to-b from-lSBlue to-lRBlue flex flex-col items-center p-7 lg:basis-1/2">
        <h2 className="font-medium text-xl text-lLavender text-center mb-8">Your Result   </h2>
        <div className="flex flex-col bg-gradient-to-b from-vBlue to-[ hsla(241, 72%, 46%, 0)] rounded-full w-40 h-40 mb-11 items-center justify-center gap-1">
            <h1 className="text-white font-bold text-6xl">76 </h1>
            <p className="text-lLavender text-sm ">of 100</p>
        </div>
        <h2 className="text-2xl  text-white font-medium mb-6">Great</h2>
        <p className="text-center text-lLavender text-base">You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  )
}

export default Result