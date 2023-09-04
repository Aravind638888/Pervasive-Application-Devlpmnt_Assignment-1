function formSubmitted(event) {
    debugger
    event.preventDefault();
    const exciting_game = $("#exciting_game option:selected").val()
    const improvement_areas = $("#improvement_areas").val()
    const safety_measures_rating = $("input[type='number'][name='safety_measures']").val()
    const rating =  $("input[type='radio'][name='rate']:checked").val()
    const formValues = {
        exciting_game: exciting_game,
        improvement_areas: improvement_areas,
        safety_measures_rating: safety_measures_rating,
        rating: rating
    }
   console.log(formValues)
}