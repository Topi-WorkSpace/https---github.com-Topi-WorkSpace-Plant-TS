import { blog, blogs, plant } from "./data.js";
import { plants } from "./data.js";

const showplant = (plants: plant) => {
    return `
        <div class="col-md-3">
            <div class="card m-2" style="width: 18rem; display: flex; flex-direction: column; justify-content: space-between;">
                <img src="${plants.imageUrl}" class="card-img-top" alt="${plants.plantname}" style="width: 286.4px; height: 286.4px">
                <div class="card-body" style="display: flex; flex-direction: column; flex-grow: 1;">
                    <h2 class="card-title">${plants.plantname}</h2>
                    <h5 class="card-title">$${plants.price}</h5>
                    <p class="card-text">${plants.description}</p>
                    <button href="#" class="btn btn-primary">Go to blog</button>
                </div>
            </div>
        </div>
    
        `;
}
export const plantList = () => {
    const listplant = plants.map(showplant);
    return listplant.join('');

    
}

const showblog = (blogs: blog) => {
    return `
      <div class="col-md-12">
            <div class="card mb-4">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src="${blogs.image}" class="img-fluid rounded-start" alt="Plant Image" style="width: 540px; height: 315px">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h2 class="card-title">${blogs.introduce}</h2>
                            <p class="card-text"><strong>Born:</strong> ${blogs.born}</p>
                            <p class="card-text"><strong>Characteristic:</strong> ${blogs.characteristic}</p>
                            <p class="card-text"><strong>Care:</strong> ${blogs.care}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const blogList = () => {
    const listblog = blogs.map(showblog);
    return listblog.join('');
}

