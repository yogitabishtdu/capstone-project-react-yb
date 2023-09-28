import React from "react"

function BookingForm(props) {
  const [date, setDate] = React.useState("")
  const [times, setTimes] = React.useState("")
  const [guests, setGuests] = React.useState("")
  const [occasion, setOccasion] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    props.SubmitForm(e)
  }
  const handleChange = (e) => {
    setDate(e)
    props.dispatch(e)
  }
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                type="date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests: </label>
              <input
                id="book-guests"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value="Reserve your table"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  )
}

export default BookingForm
