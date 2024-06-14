import React, { useEffect } from 'react';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import SideToolBar from '../components/SideToolBar';
import CanvasPreview from '../components/CanvasPreview';
import usePaintCustomHook from '../Hooks/usePaintCustomHook'; // Ensure this hook is imported correctly

const PaintPage = () => {
  const [{ canvasRef }, { init, handleColor, handleEraser, handleBrush, handleThickness }] = usePaintCustomHook();

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className='flex h-screen'>
        <SideToolBar
          handleColor={handleColor}
          handleBrush={handleBrush}
          handleEraser={handleEraser}
          isEraser={false}
          handleThickness={handleThickness}
        />
        <CanvasPreview
          canvasRef={canvasRef}
          init={init}
          eraser={false}
          thickness={25}
        />
      </div>
    </div>
  );
};

export default PaintPage;