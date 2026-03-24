
import Footer from "./components/Footer";
import SummaryBar from "./components/SummaryBar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">

      
      
      

      <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4">

        

       

        {/* SUMMARY */}
        <SummaryBar />

      </main>

      <Footer />
    </div>
  );
}

export default App;