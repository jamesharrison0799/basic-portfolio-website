from PIL import Image
import os

def create_thumbnail(image_path):
    # Open the image
    with Image.open(image_path) as img:
        # Calculate new dimensions for the thumbnail (30% of original)
        width, height = img.size
        new_width = int(width * 0.3)
        new_height = int(height * 0.3)

        # Create thumbnail
        thumbnail = img.resize((new_width, new_height))

        # Create new filename for the thumbnail
        thumbnail_path = os.path.join(os.path.dirname(image_path), f"thumbnail-{os.path.basename(image_path)}")

        # Save the thumbnail
        thumbnail.save(thumbnail_path)
        print(f"Thumbnail created: {thumbnail_path}")

def create_thumbnails_in_folder(folder_path):
    # List all files in the folder
    for filename in os.listdir(folder_path):
        # Check if the file is an image
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            # Create thumbnail for each image
            image_path = os.path.join(folder_path, filename)
            create_thumbnail(image_path)

# Example usage
if __name__ == "__main__":
    # Specify the path to the folder containing images
    folder_path = "path_to_your_folder"
    create_thumbnails_in_folder(folder_path)
