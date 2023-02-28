module.exports = {
    nets: {
      
    },
    params: {
      class: 'Trackball',
	    side: 'F'
    },
    body: p => `
        (module pimoroni_trackball (layer F.Cu) (tedit 5D20B36F)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value TRCKBLL (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        

        (fp_line (start -3.81 1.33) (end -3.81 -1.33) (layer "F.SilkS") (width 0.12))
        (fp_line (start -5.08 1.33) (end -6.41 1.33) (layer "F.SilkS") (width 0.12))
        (fp_line (start -3.81 -1.33) (end 6.41 -1.33) (layer "F.SilkS") (width 0.12))
        (fp_line (start 6.41 1.33) (end 6.41 -1.33) (layer "F.SilkS") (width 0.12))
        (fp_line (start -3.81 1.33) (end 6.41 1.33) (layer "F.SilkS") (width 0.12))
        (fp_line (start -6.41 1.33) (end -6.41 0) (layer "F.SilkS") (width 0.12))
        (fp_line (start -12.5 -4.5) (end -12.5 -20.5) (layer "Dwgs.User") (width 0.12))
        (fp_line (start 7.5 1.5) (end 7.5 -4.5) (layer "Dwgs.User") (width 0.12))
        (fp_line (start -7.5 1.5) (end 7.5 1.5) (layer "Dwgs.User") (width 0.12))
        (fp_line (start -7.5 1.5) (end -7.5 -4.5) (layer "Dwgs.User") (width 0.12))
        (fp_line (start 7.5 -4.5) (end 12.5 -4.5) (layer "Dwgs.User") (width 0.12))
        (fp_line (start -7.5 -4.5) (end -12.5 -4.5) (layer "Dwgs.User") (width 0.12))
        (fp_line (start 12.5 -4.5) (end 12.5 -20.5) (layer "Dwgs.User") (width 0.12))
        (fp_line (start 12.5 -20.5) (end -12.5 -20.5) (layer "Dwgs.User") (width 0.12))
        (fp_rect (start -7 -19.5) (end 7 -5.5) (layer "Dwgs.User") (width 0.12) (fill none))
        (fp_circle (center 0 -12.5) (end 3 -12.5) (layer "Dwgs.User") (width 0.12) (fill none))
        (fp_line (start -6.88 -1.8) (end -6.88 1.8) (layer "F.CrtYd") (width 0.05))
        (fp_line (start 6.87 1.8) (end 6.87 -1.8) (layer "F.CrtYd") (width 0.05))
        (fp_line (start 6.87 -1.8) (end -6.88 -1.8) (layer "F.CrtYd") (width 0.05))
        (fp_line (start -6.88 1.8) (end 6.87 1.8) (layer "F.CrtYd") (width 0.05))
        (fp_line (start -5.715 1.27) (end -6.35 0.635) (layer "F.Fab") (width 0.1))
        (fp_line (start -6.35 0.635) (end -6.35 -1.27) (layer "F.Fab") (width 0.1))
        (fp_line (start 6.35 1.27) (end -5.715 1.27) (layer "F.Fab") (width 0.1))
        (fp_line (start -6.35 -1.27) (end 6.35 -1.27) (layer "F.Fab") (width 0.1))
        (fp_line (start 6.35 -1.27) (end 6.35 1.27) (layer "F.Fab") (width 0.1))
        (pad "1" thru_hole rect (at -5.08 0 ${p.rot + 90}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "2" thru_hole oval (at -2.54 0 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "3" thru_hole oval (at 0 0 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "4" thru_hole oval (at 2.54 0 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "5" thru_hole oval (at 5.08 0 90) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 9.8 -7.05 180) (size 4.7 4.7) (drill 2.7) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 9.8 -17.95 180) (size 4.7 4.7) (drill 2.7) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -9.8 -7.05 180) (size 4.7 4.7) (drill 2.7) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -9.8 -17.95 180) (size 4.7 4.7) (drill 2.7) (layers *.Cu *.Mask))
      
      )
        `
}