import "./App.css";

function App() {
  return (
    <main>
      <section className="bg-[var(--yellow)] p-4 flex flex-col items-center justify-center h-screen">
        <div className="bg-white rounded-[20px] p-6 max-w-md m-w-[327px] w-full md:w-[384px] border border-gray-950 shadow-[var(--primary-shadow)] md:max-h-[522px] flex flex-col">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}illustration-article.svg`}
              className="w-full rounded-[10px]"
              alt="Illustration"
            />
          </div>

          <div className="mt-6 flex flex-col items-start gap-3 text-gray-950">
            <span className="bg-[var(--yellow)] rounded-sm px-3 py-1 font-extrabold text-sm">
              Learning
            </span>
            <p>Published 21 Dec 2023</p>
          </div>

          <div className="mt-3">
            <h1 className="font-extrabold text-2xl">HTML & CSS foundations</h1>
            <p className="mt-3 text-gray-500">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}image-avatar.webp`}
              className="w-[32px] h-[32px] rounded-full"
              alt="Avatar"
            />
            <span className="font-extrabold text-sm">Greg Hooper</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
