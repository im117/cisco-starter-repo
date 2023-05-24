import './Exhibit.css'

export function Exhibit({ headingText, children }) {
    return (<div className='Exhibit'>
      <strong className="ex-heading">{headingText}</strong>
      <div>
        {children}
      </div>
    </div>);
  }

