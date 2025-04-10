import React, { useState } from "react";
import './ActivitiesChoice.css';

function ActivitiesChoice({ formData, handleChange, ACTIVITIES_CHOICES, getActivitiesChoices }) {
    const [activities, setActivities] = useState([{ activitiesType: '', activitiesExecuted: [], activitiesPerCent: [] }]);

    const handleAddActivitie = () => {
        setActivities([...activities, { activitiesType: '', activitiesExecuted: [], activitiesPerCent: [] }]);
    };

    const handleActivitiesChange = (index, event) => {
        const { name, value } = event.target;
        const newActivities = activities.map((activitie, i) => {
            if (i === index) {
                return { ...activitie, [name]: value };
            }
            return activitie;
        });
        setActivities(newActivities);
    };

    const handleExecutedChange = (index, executedIndex, event) => {
        const { name, value } = event.target;
        const newActivities = activities.map((activitie, i) => {
            if (i === index) {
                const newExecuted = activitie.activitiesExecuted.map((executed, j) => {
                    if (j === executedIndex) {
                        return value;
                    }
                    return executed;
                });
                return { ...activitie, activitiesExecuted: newExecuted };
            }
            return activitie;
        });
        setActivities(newActivities);
    };

    const handlePerCentChange = (index, perCentIndex, event) => {
        const { name, value } = event.target;
        if (value >= 0 && value <= 100 && value.length <= 3) {
            const newActivities = activities.map((activitie, i) => {
                if (i === index) {
                    const newPerCent = activitie.activitiesPerCent.map((perCent, j) => {
                        if (j === perCentIndex) {
                            return value;
                        }
                        return perCent;
                    });
                    return { ...activitie, activitiesPerCent: newPerCent };
                }
                return activitie;
            });
            setActivities(newActivities);
        }
    };

    const handleAddExecuted = (index) => {
        const newActivities = activities.map((activitie, i) => {
            if (i === index) {
                return { ...activitie, activitiesExecuted: [...activitie.activitiesExecuted, ''], activitiesPerCent: [...activitie.activitiesPerCent, ''] };
            }
            return activitie;
        });
        setActivities(newActivities);
    };

    const handleRemoveExecuted = (index, executedIndex) => {
        const newActivities = activities.map((activitie, i) => {
            if (i === index) {
                const newExecuted = activitie.activitiesExecuted.filter((_, j) => j !== executedIndex);
                const newPerCent = activitie.activitiesPerCent.filter((_, j) => j !== executedIndex);
                return { ...activitie, activitiesExecuted: newExecuted, activitiesPerCent: newPerCent };
            }
            return activitie;
        });
        setActivities(newActivities);
    };

    const handleRemoveActivity = (index) => {
        const newActivities = activities.filter((_, i) => i !== index);
        setActivities(newActivities);
    };

    return (
        <div className="text-center type-activities">
            {activities.map((activitie, index) => (
                <div key={index} className="text-left ml-1">
                    <div className="font-size">Tipo de atividade:</div>
                    <div className="activity-header">
                        <select className="form-select" name="activitiesType" value={activitie.activitiesType} onChange={(e) => handleActivitiesChange(index, e)}>
                            <option value=""></option>
                            {ACTIVITIES_CHOICES.map(([value, label]) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                        <button type="button" className="remove-button" onClick={() => handleRemoveActivity(index)}>X</button>
                    </div>

                    {activitie.activitiesType && (
                        <div className="text-center type--activities">
                            <div className="font-size">Atividade Executada:</div>
                            {activitie.activitiesExecuted.map((executed, executedIndex) => (
                                <div key={executedIndex} className="executed-activity">
                                    <select className="form-select" name="activitiesExecuted" value={executed} onChange={(e) => handleExecutedChange(index, executedIndex, e)} required>
                                        <option value=""></option>
                                        {getActivitiesChoices(activitie.activitiesType).map(([value, label]) => (
                                            <option key={value} value={value}>{label}</option>
                                        ))}
                                    </select>
                                    <input
                                        type="number"
                                        className="form-input"
                                        name="activitiesPerCent"
                                        value={activitie.activitiesPerCent[executedIndex]}
                                        onChange={(e) => handlePerCentChange(index, executedIndex, e)}
                                        min="0"
                                        max="100"
                                        maxLength="3"
                                        pattern="\d{1,3}"
                                        required
                                    />
                                    <button type="button" className="remove-button" onClick={() => handleRemoveExecuted(index, executedIndex)}>X</button>
                                </div>
                            ))}
                            <button type="button" className="add-button" onClick={() => handleAddExecuted(index)}>Adicionar Atividade</button>
                        </div>
                    )}
                </div>
            ))}
            <button type="button" className="add-button" onClick={handleAddActivitie}>+</button>
        </div>
    );
}

export default ActivitiesChoice;