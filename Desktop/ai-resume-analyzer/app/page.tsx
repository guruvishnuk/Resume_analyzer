import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Analyze Your Resume with AI
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Upload your resume and compare it with a job description to
            discover your strengths, missing skills, and improvement areas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Resume Upload */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Upload Resume
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Upload your resume in PDF format.
            </p>

            <div className="mt-6 flex min-h-56 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
              <div className="text-center">
                <p className="font-medium text-gray-700">
                  Drag & drop your resume
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  or choose a PDF file
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Choose File
                </button>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Job Description
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Paste the job description you want to compare against.
            </p>

            <textarea
              placeholder="Paste the job description here..."
              className="mt-6 min-h-56 w-full resize-none rounded-xl border border-gray-300 p-4 text-sm outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-xl bg-black px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-gray-800"
          >
            Analyze Resume
          </button>
        </div>
      </section>
    </main>
  );
}