import "./sidebar.css";
import DigitalService from "../../const/DigitalService/SettingEmail.json"

export function DigitalServiceSidebar() {
    return (
        <div>
            <div className="sidebar">
                <ul>
                    <li>Setting up an Email</li>
                    <li>Setting up your mygov</li>
                    <li>Medicare</li>
                    <li>Linking mygov with centrelink</li>
                </ul>
            </div>
        </div>

    )
}