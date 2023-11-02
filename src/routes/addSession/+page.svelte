<script>
    import {goto} from '$app/navigation';
    let title = "";
  let type = "Task";
  let date = "";
  let time = "12:00 AM";
  let duration = "";
  let notes = "";

  function createSession() {
    // You can access the user's input in the above variables (title, type, date, time, duration, notes)
    // For example, you can log the values to the console or perform further actions here.
    console.log("Is this working");
    console.log("Title:", title);
    console.log("Type:", type);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Duration:", duration);
    console.log("Notes:", notes);
  }
  export let data;
  export let form;

</script>

<div class = header>
    Create Session
</div>

<form method="POST" action="?/createSession">
<div class="overflow-x-auto">
    <table class="table">
      <tbody>
        <tr class="bg-base-200">
          <th>1</th>
          <td>Title</td>
          <td><input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" bind:value={title}/>
            </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Type</td>
          <td><select class="select select-bordered select-sm w-full max-w-xs" bind:value={type}>
            <option disabled selected>Select</option>
            <option>Task</option>
            <option>Event</option>
            <option>Study</option>
          </select></td>
        </tr>
        <tr>
          <th>3</th>
          <td>Date (MM/DD/YYYY)</td>
          <td><input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" bind:value={date}/></td>
        </tr>
        <tr>
            <th>4</th>
            <td>Time</td>
            <td>
                <select class="select select-bordered select-sm w-full max-w-xs" bind:value={time}>
                    <option disabled selected>Select</option>
                    <option>12:00 AM</option>
                    <option>12:30 AM</option>
                    <option>1:00 AM</option>
                    <option>1:30 AM</option>
                    <option>2:00 AM</option>
                    <option>2:30 AM</option>
                    <option>3:00 AM</option>
                    <option>3:30 AM</option>
                    <option>4:00 AM</option>
                    <option>4:30 AM</option>
                    <option>5:00 AM</option>
                    <option>5:30 AM</option>
                    <option>6:00 AM</option>
                    <option>6:30 AM</option>
                    <option>7:00 AM</option>
                    <option>7:30 AM</option>
                    <option>8:00 AM</option>
                    <option>8:30 AM</option>
                    <option>9:00 AM</option>
                    <option>9:30 AM</option>
                    <option>10:00 AM</option>
                    <option>10:30 AM</option>
                    <option>11:00 AM</option>
                    <option>11:30 AM</option>
                    <option>12:00 PM</option>
                    <option>12:30 PM</option>
                    <option>1:00 PM</option>
                    <option>1:30 PM</option>
                    <option>2:00 PM</option>
                    <option>2:30 PM</option>
                    <option>3:00 PM</option>
                    <option>3:30 PM</option>
                    <option>4:00 PM</option>
                    <option>4:30 PM</option>
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                    <option>9:00 PM</option>
                    <option>9:30 PM</option>
                    <option>10:00 PM</option>
                    <option>10:30 PM</option>
                    <option>11:00 PM</option>
                    <option>11:30 PM</option>
            </td>
        </tr>
        <tr>
            <th>5</th>
            <td>Duration (Hours)</td>
            <td><input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" bind:value={duration}/></td>
        </tr>
        <tr>
            <th>6</th>
            <td>Notes</td>
            <td>
                <textarea class="textarea textarea-bordered" placeholder="Bio" bind:value={notes}></textarea>
            </td>
        </tr>
      </tbody>
    </table>
  </div>

<div class = create-button>  
    <button class="btn btn-active btn-neutral" formaction="?/createSession">Create</button>
</div>
</form>

  <style>
    .header {
        color: black;
        font-size: 2em;
        font-family: 'Roboto', sans-serif;;
        font-weight: 'bold';
        margin-top: 10px;
        margin-bottom: 30px;
        text-align: center;
    }
    .create-button {
        text-align: center;
    }

    
  </style>