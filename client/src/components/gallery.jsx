import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Button } from '@/components/ui/button.jsx';
import { getNasaInfo } from '../services/galleryService'; // after moving fetchImagesAndManifest to server wont need this here anymore
import { getManifestInfo } from '../services/galleryService';


const CamGallery = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sol, setSol] = useState(0);
  const [submittedSol, setSubmittedSol] = useState(null);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const imagesPerPage = 25;

  const { camToFilter } = useParams(); // Retrieving the URL parameter


  useEffect(() => {
    getManifestInfo()
  }, [submittedSol, currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePageSelect = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleSubmit = () => {
    setSubmittedSol(sol);
  }

  return (
    <div className="w-full min-h-screen p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold text-center mb-4">Gallery</h1>
      <p>{camToFilter}</p>

      <div className="flex justify-center mb-4">
        <label htmlFor="sol" className="mr-2">
          Sol:
        </label>
        <input
          type="number"
          id="sol"
          value={sol}
          onChange={(e) => setSol(Number(e.target.value))}
          min="0"
          className="w-24 px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </div>

      {loading && <p className="text-center">Loading images...</p>}

      {error && <p className="text-center text-red-400">{error}</p>}

      {!loading && !error && (
        <>
          <p className="text-center">Total Photos for Sol {sol}: {totalPhotos}</p>

          <div className="flex flex-wrap justify-center gap-4">
            {images.length > 0 ? (
              images.map((image) => (
                <button
                  key={image.id}
                  className="border border-gray-600 rounded overflow-hidden"
                  onClick={() => navigate('/imageViewer', { state: { imageUrl: image.img_src } })}
                >
                  <img
                    src={image.img_src}
                    alt={`Mars Rover Image ${image.id}`}
                    className="w-60 h-48 object-cover"
                  />
                </button>
              ))
            ) : (
              <p className="text-center col-span-full">No images available for this sol.</p>
            )}
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            <Button onClick={handlePreviousPage} className="bg-blue-600 text-white py-1 px-3 rounded">
              Previous
            </Button>
            <Button onClick={handleNextPage} className="bg-blue-600 text-white py-1 px-3 rounded">
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CamGallery;
