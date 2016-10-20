# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  if $.cookie("age_verified") is "true"
    $('#age-gate').modal('hide');
  else
    $('#age-gate').modal({backdrop: 'static', show: true});
  $("#age-conf-checkbox").change ->
    $("#modal-continue-button").prop('disabled', !$("#age-conf-checkbox").prop("checked"));
    $.cookie("age_verified", $("#age-conf-checkbox").prop("checked"));

  # Use FullPage
  $(document).ready ->
    $('#fullpage').fullpage()
