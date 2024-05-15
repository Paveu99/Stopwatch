import '../styles/StopwatchView.scss'
export const StopwatchView = () => {
    return <div className="main_view">
        <header className="upper-stopwatch">
            <section></section>
            <section className="smaller-stopwatch">
                00:00:00
            </section>
        </header>
        <div className="bigger-stopwatch">
            00:00:00
        </div>
        <footer className="buttons">
            BUTTONS
        </footer>
    </div>
}