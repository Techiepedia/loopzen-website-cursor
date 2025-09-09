import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Discuss</span>
          </h1>
          <p className="text-xl text-muted-foreground">Schedule a meeting with our team</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Cal 
            namespace="30min"
            calLink="loopzen/30min"
            style={{width:"100%",height:"600px",overflow:"scroll"}}
            config={{"layout":"month_view","theme":"dark"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;