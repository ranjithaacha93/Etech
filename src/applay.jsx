import './applay.css';

export default function Applay() {
    return (
        <div className="form-container">
            <iframe
                src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Google Form"
            >
                Loading…
            </iframe>
        </div>
    );
}
