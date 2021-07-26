import React from "react";
import { getProject, deleteProject } from "../../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Board from "../Board";


class ProjectDetails extends React.Component {
    state = {
        id: "",
        title: "",
        description: "",
        imageUrl: "",
        boards: []
    };


    async componentDidMount() {
        const response = await getProject(this.props.match.params.id);
        this.setState({
            id: response.data._id,
            title: response.data.title,
            description: response.data.description,
            imageUrl: response.data.imageUrl,
            boards: response.data.boards
        });
    }


    handleDeleteProject = async () => {
        await deleteProject(this.state.id);
        toast.success("Project deleted.");
        this.props.history.push("/");
    };


    render() {
        const { id, title, description, imageUrl, boards } = this.state;
        return (
            <>
                <h2>{title}</h2>
                <p>{description}</p>
                {imageUrl && (
                    <img style={{ width: "100px" }} src={imageUrl} alt="project" />
                )}
                <div>
                    <button onClick={this.handleDeleteProject}>Delete</button>
                    <button
                        onClick={() => {
                            this.props.history.push(`/projects/${id}/edit`);
                        }}
                    >
                        Edit
                    </button>
                    <NavLink to={`/projects/${id}/edit`}>Edit</NavLink>
                </div>
                <Board boards={boards} />
            </>
        );
    }
}


export default ProjectDetails;
