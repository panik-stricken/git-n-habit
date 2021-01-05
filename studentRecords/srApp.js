
const navigation = {
    Student: {
        type: 'Top',
        settings: [
            "Jayden",
            "Tat'yana",
            "Domenick",
            "G",
            "David",
            "Guest"
        ]
    },
    Class: {
        type: 'Top',
        settings: [
            "English",
            "Math",
            "F. Lang.",
            "Music",
            "Ind. Living"
        ]
    },
    Assignment: {
        type: 'Top',
        settings: [
            "New",
            "Grade"
        ]
    },
    Progress: {
        type: 'Top',
        settings: [
            
        ]
    }
}



new Vue({
    el: "#display",
    data: {
        message: "Connect",
        navTabs: navigation,
        currentTab: null
    },
    computed: {
        primary(){
            return Object.keys(this.navTabs).filter(e=>this.navTabs[e].type === "Top")
        },
        panelSettings(){
            if(this.currentTab !== null){
                return this.navTabs[this.currentTab].settings;
            } else {
                return []
            }
        }
    }

})
