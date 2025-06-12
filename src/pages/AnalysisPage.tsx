import React, { useState } from 'react';
import { Upload, FileType, Play, Download } from 'lucide-react';

export default function AnalysisPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [logSteps, setLogSteps] = useState<string[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResultMessage(null);
      setLogSteps([]);
    }
  };

  const handleAnalysis = async () => {
    if (!selectedFile) return;

    setAnalyzing(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      // Set both logs and final message
      setLogSteps(data.log || []);
      setResultMessage(data.message || 'Analysis complete.');
    } catch (error) {
      console.error('Error during analysis:', error);
      setResultMessage('Error during analysis. Please try again.');
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">EEG Analysis</h2>

          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".edf"
                onChange={handleFileSelect}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                <span className="text-gray-600">
                  {selectedFile ? selectedFile.name : 'Drop EEG file here or click to upload'}
                </span>
              </label>
            </div>

            {selectedFile && (
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FileType className="h-5 w-5 text-gray-500 mr-2" />
                  <span>{selectedFile.name}</span>
                </div>
                <button
                  onClick={handleAnalysis}
                  disabled={analyzing}
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                >
                  {analyzing ? (
                    'Analyzing...'
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start Analysis
                    </>
                  )}
                </button>
              </div>
            )}

            {(logSteps.length > 0 || resultMessage) && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
                  {logSteps.map((step, idx) => (
                    <div key={idx} className="text-gray-700">
                      • {step}
                    </div>
                  ))}
                </div>

                {resultMessage && (
                  <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-semibold">{resultMessage}</p>
                  </div>
                )}

                {/* <button className="mt-4 flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Report
                </button> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
