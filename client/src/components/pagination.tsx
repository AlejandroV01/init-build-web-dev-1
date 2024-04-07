import React from 'react'

type onPageChangeType = (n: number) => void;

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: onPageChangeType;
};

/**
 * 
 * @param currentPage - takes the current page
 * @param onPageChange - change page handle function
 * @returns - returns nothing if page is 1
 */
const prevButton = (currentPage: number, onPageChange: onPageChangeType) => {
  if (currentPage > 1) {
    const buttonContent = '<';
    return (
      <button key={'prevButton'} className={getButtonStyling()} onClick={() => onPageChange(currentPage - 1)}>
        {buttonContent}
      </button>
    )
  }
  return null;
};


/**
 * 
 * @param currentPage - takes the current page
 * @param totalPages - takes the total pages available or requested
 * @param onPageChange - change page handle function
 * @returns - returns nothing if last page
 */
const nextButton = (currentPage: number, totalPages: number, onPageChange: onPageChangeType) => {
  if (currentPage < totalPages) {
    const buttonContent = '>';
    return (
      <button key={'nextButton'} className={getButtonStyling()} onClick={() => onPageChange(currentPage + 1)}>
        {buttonContent}
      </button>
    )
  }
  return null;
};

// Button to jump to the first page
const firstPageButton = (onPageChange: onPageChangeType) => {
  return (
    <>
    <button onClick={() => onPageChange(1)} className={getButtonStyling()} key={'firstPage'}>
      1
    </button>
    <p>...</p>
    </>
  );
};

// Button to jump to the last page
const lastPageButton = (totalPages: number, onPageChange: onPageChangeType) => {
  return (
    <>
    <p>...</p>
    <button onClick={() => onPageChange(totalPages)} className={getButtonStyling()} key={'lastPage'}>
      {totalPages}
    </button>
    </>
  );
};


/**
 * @param renderSize - represents how many numbers are rendered at once
 * @param distribution - this represents how many numbers to each side of the currentPage I.E ( 2 3 5 6 7) distribution = 2
 * @param currentPage - takes current page user is at
 * @param totalPages - total available pages
 * @returns - array of possible page numbers to render
 */
const getRenderNumbers = (renderSize: number, 
                          distribution: number, 
                          currentPage: number, 
                          totalPages: number) => {
  
  const numbers: number[] = [];
  let startPage: number, lastPage: number;

  startPage = Math.max(currentPage - distribution, 1);
  lastPage = Math.min(currentPage + distribution, totalPages);

  if (totalPages >= renderSize) {
    // case for the last 2 pages
    if ((totalPages - currentPage) <= 1) {
      startPage = totalPages - renderSize + 1;
      lastPage = totalPages;
    }

    // case for the first two pages
    if (currentPage <= 2) {
      startPage = 1;
      lastPage = renderSize;
    }
  }
  

  for (let i = startPage; i <= lastPage; i++) {
    numbers.push(i);
  }

  return numbers;
};


/**
 * 
 * @param borderColor - Color of button border
 * @param textColor - Color of text inside button
 * @param bgColor - Inside button background color
 * @param isSelected - specify if button is selected (so it's not clickable)
 * @param borderType - rounded, square, etc
 * @returns 
 */
const getButtonStyling = (borderColor: string = 'border-gray-900', 
                          textColor: string = 'text-gray-900', 
                          bgColor: string = '', 
                          isSelected: boolean = false,
                          borderType: string = 'rounded-full') => {

  let selected = '';

  if (isSelected) selected = 'focus:outline-none cursor-default'; 

  return  'align-middle select-none font-sans font-bold text-center uppercase' +
          'transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none' + 
          `text-xs py-1 px-3 border ${borderColor} ${textColor} ${bgColor} ${selected} hover:opacity-75 focus:ring` + 
          `focus:ring-gray-300 active:opacity-[0.85] ${borderType}`;
};


const render = ({currentPage, totalPages, onPageChange}: PaginationProps) => {

  // renderSize represents how many page numbers will be displayed at the same time
  const renderSize: number = 5;
  // symmetrical distribution for each side around the renderSize
  const distribution: number = Math.floor(renderSize / 2)

  const renderNumbers = () => {

    let pages: number[] = [];


    pages = getRenderNumbers(renderSize, distribution, currentPage, totalPages);

    return (
      <>
        {pages.map((n) => (
          <React.Fragment key={n}>
            {n === currentPage && (
              <button onClick={() => onPageChange(n)} className={getButtonStyling('border-primary', 'text-primary', 'bg-primary/20', true)}>
                {n}
              </button>
            )}
    
            {n !== currentPage && (
              <button onClick={() => onPageChange(n)} className={getButtonStyling()}>
                {n}
              </button>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <>
      {prevButton(currentPage, onPageChange)}
      
      {currentPage - 1 >= 1 + distribution && totalPages > renderSize && (
        firstPageButton(onPageChange)
      )}

      {renderNumbers()}

      { (totalPages - currentPage > distribution)  && totalPages > renderSize &&(
        lastPageButton(totalPages, onPageChange)
      )}

      {nextButton(currentPage, totalPages, onPageChange)}
    </>
  )

}


const Pagination = (props: PaginationProps) => {

  return (
    <div className='flex justify-start items-center space-x-3'>
      {render(props)}
    </div>
  );
};

export default Pagination;