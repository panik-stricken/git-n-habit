
const navigation = {
    Students: {
        type: 'Top'
    },
    Courses: {
        type: 'Top'
    },
    Student: {
        type: 'Side'
    }
}



new Vue({
    el: "#display",
    data: {
        message: "Connect",
        navTabs: navigation
    },
    computed: {
        primary(){
            return Object.keys(this.navTabs).filter(e=>this.navTabs[e].type === "Top")
        }
    }

})
