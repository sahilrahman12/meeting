frappe.views.calender["Meeting"] = {
	field_map: {
		"start": "from_date",
		"end": "to_date",
		"id": "name",
		"title": "title",
		"status": "status",
	},
	get_events_method: "meeting.api.get_meetings"
}